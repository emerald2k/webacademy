export default function EditareProdus() {
  const produs = useLoaderData();

  return (
    <div>
      <h2>Editare: {produs.nume}</h2>

      <Form method="post">
        <div>
          <label>Nume produs:</label>

          <input type="text" name="nume" defaultValue={produs.nume} />
        </div>

        <div>
          <label>Preț:</label>

          <input type="number" name="pret" defaultValue={produs.pret} />
        </div>

        <div>
          <label>Categorie:</label>

          <input type="text" name="categorie" defaultValue={produs.categorie} />
        </div>

        <div>
          <label>Stoc:</label>

          <input type="number" name="stoc" defaultValue={produs.stoc} />
        </div>

        <div>
          <label>Descriere:</label>

          <textarea name="descriere" defaultValue={produs.descriere} />
        </div>

        <button type="submit">Salvează modificările</button>
      </Form>

      <Link to={`/produse/${produs.id}`}>Anulează</Link>
    </div>
  );
}
