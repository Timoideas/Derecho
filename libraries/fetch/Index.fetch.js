export default async function Fetch({
  api = "",
  method = "GET",
  body = {},
  token = "",
  onPreFetch = () => {},
  onFetch = () => {},
  onError = () => {},
}) {
  try {
    onPreFetch();
    let action =
      {
        get: "obtener",
        post: "crear",
        put: "actualizar",
        delete: "eliminar",
      }[method.toLowerCase()] || method;
    const res = await fetch(api, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    const item = await res.json();
    if (!item) throw new Error(`No se pudo ${action} el elemento.`);
    onFetch(item);
  } catch (err) {
    onError({ action, message: err });
  }
}
