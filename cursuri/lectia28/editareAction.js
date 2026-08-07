action pentru editare
 
export async function editareAction({

  request,

  params,

}) {

  const formData =

    await request.formData();
 
  console.log(formData);
 
  return null;

}
 
extragem datele din formdata
 
export async function editareAction({

  request,

  params,

}) {

  const formData =

    await request.formData();
 
  const nume =

    formData.get("nume");
 
  const pret =

    formData.get("pret");
 
  const categorie =

    formData.get("categorie");
 
  const stoc =

    formData.get("stoc");
 
  const descriere =

    formData.get("descriere");
 
  console.log({

    nume,

    pret,

    categorie,

    stoc,

    descriere,

  });
 
  return null;

}
 
adaugam validarea
 
export async function editareAction({

  request,

  params,

}) {

  const formData =

    await request.formData();
 
  const nume =

    formData.get("nume")?.trim();
 
  const pret =

    Number(formData.get("pret"));
 
  const categorie =

    formData.get("categorie")?.trim();
 
  const stoc =

    Number(formData.get("stoc"));
 
  const descriere =

    formData.get("descriere")?.trim();
 
  const erori = {};
 
  if (!nume) {

    erori.nume =

      "Numele produsului este obligatoriu.";

  }
 
  if (

    Number.isNaN(pret) ||

    pret <= 0

  ) {

    erori.pret =

      "Prețul trebuie să fie mai mare decât 0.";

  }
 
  if (!categorie) {

    erori.categorie =

      "Categoria este obligatorie.";

  }
 
  if (

    Number.isNaN(stoc) ||

    stoc < 0

  ) {

    erori.stoc =

      "Stocul nu poate fi negativ.";

  }
 
  if (

    descriere.length < 10

  ) {

    erori.descriere =

      "Descrierea trebuie să aibă minimum 10 caractere.";

  }
 
  if (

    Object.keys(erori).length > 0

  ) {

    return {

      erori,

    };

  }
 
  return null;

}
 
afisam erorile in formular
 
export default function EditareProdus() {

  const produs =

    useLoaderData();
 
  const actionData =

    useActionData();
 
  return (
<Form method="post">
 
      <div>
<label>Nume:</label>
 
        <input

          name="nume"

          defaultValue={produs.nume}

        />
 
        {actionData?.erori?.nume && (
<p>

            {actionData.erori.nume}
</p>

        )}
</div>
 
    </Form>

  );

}
 
actualizam produsul
 
export async function editareAction({

  request,

  params,

}) {

  const formData =

    await request.formData();
 
  const nume =

    formData.get("nume")?.trim();
 
  const pret =

    Number(formData.get("pret"));
 
  const categorie =

    formData.get("categorie")?.trim();
 
  const stoc =

    Number(formData.get("stoc"));
 
  const descriere =

    formData.get("descriere")?.trim();
 
  const erori = {};
 
  if (!nume) {

    erori.nume =

      "Numele este obligatoriu.";

  }
 
  if (

    Number.isNaN(pret) ||

    pret <= 0

  ) {

    erori.pret =

      "Prețul este invalid.";

  }
 
  if (!categorie) {

    erori.categorie =

      "Categoria este obligatorie.";

  }
 
  if (

    Number.isNaN(stoc) ||

    stoc < 0

  ) {

    erori.stoc =

      "Stocul este invalid.";

  }
 
  if (

    !descriere ||

    descriere.length < 10

  ) {

    erori.descriere =

      "Descrierea este prea scurtă.";

  }
 
  if (

    Object.keys(erori).length > 0

  ) {

    return {

      erori,

    };

  }
 
  updateProdus(

    params.produsId,

    {

      nume,

      pret,

      categorie,

      stoc,

      descriere,

    }

  );
 
  return null;

}
 