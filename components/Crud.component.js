import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import style from "./Crud.module.css";
import {
  Spinner_Donnut,
  Spinner_DonnutRainbow,
  Spinner_Rainbow,
} from "./timoideas/Timoideas.components";
export default function Crud() {
  const { data, error, mutate } = useSWR("/api/articulos");
  const [inputsForm, setInputsForm] = useState({});
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner_Donnut />;
  const CreateForm = (e) => {
    e.preventDefault();
    fetch("/api/articulos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputsForm),
    })
      .then((res) => res.json())
      .then((item) => {
        setInputsForm({});
        e.target.reset();
        mutate([...data, item]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.Container}>
      <div className={style.List}>
        {data.map((item) => (
          <Item key={item._id} mutate={mutate} data={item} />
        ))}
      </div>
      <form className={style.Create} onSubmit={CreateForm}>
        <input
          type="text"
          placeholder="Crear Articulos"
          onChange={(e) => {
            setInputsForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          name="articulos"
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
const Item = ({ data, mutate }) => {
  const [editMode, setEditMode] = useState(false);
  const [itemValue, setItemValue] = useState(data);
  const [errors, setErrors] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const refEditButton = useRef();

  const EditItem = (_id) => {
    setDisabled(true);
    if (data !== itemValue) {
      fetch("/api/articulos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: data._id, articulos: itemValue }),
      })
        .then((res) => res.json())
        .then((item) => {
          mutate((prev) =>
            prev.map((item) => {
              if (item._id === data._id) {
                return itemValue;
              }
              return item;
            })
          );
          setEditMode(false);
          setErrors([]);
          setDisabled(false);
        })
        .catch((err) => {
          setErrors((prev) => prev.concat({ action: "editar", message: err }));
        });
    } else {
      setEditMode(false);
      setDisabled(false);
    }
  };
  const DeleteItem = () => {
    fetch("/api/articulos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: data._id }),
    })
      .then((res) => res.json())
      .then((item) => {
        mutate((prev) => prev.filter((item) => item._id !== data._id));
      })
      .catch((err) => {
        setErrors((prev) => prev.concat({ action: "eliminar", message: err }));
      });
  };
  return (
    <div className={style.Item}>
      <div className={style.Errors}>
        {errors.map((error, index) => (
          <p key={index}>
            Error al {error.action}: {error.message}.
          </p>
        ))}
      </div>
      <div>
        <div>
          {editMode ? (
            <input
              type="text"
              defaultValue={itemValue.articulos}
              onChange={(e) => {
                setItemValue(e.target.value);
              }}
              autoFocus
            />
          ) : (
            <p>{itemValue.articulos}</p>
          )}
        </div>
        <div className={style.ItemActions}>
          <div className={style.ItemEditMode}>
            {editMode ? (
              <>
                <button onClick={() => setEditMode(false)}>Cancelar</button>
                <button onClick={EditItem}>Guardar</button>
              </>
            ) : (
              <button onClick={() => setEditMode(true)} ref={refEditButton}>
                Editar
              </button>
            )}
          </div>
          <button onClick={DeleteItem}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};
