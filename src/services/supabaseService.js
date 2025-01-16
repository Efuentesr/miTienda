import supabase from "../config/supabaseConfig";

const BUCKET_NAME = "miTienda";
const PATH_WEB_APP = "prd-images"

const uploadFile = async (archivo) => {
  try {
    const nombreCompleto = `${PATH_WEB_APP}/${Date.now()}-${archivo.name}`; //estamos concatenando para que el nombre sea: 213421412-foto.jpg
    const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(nombreCompleto, archivo);
    if(error){
      throw error
    } else {
      //obtenemos la URL del archivo
      const archivoURL = await supabase.storage.from(BUCKET_NAME).getPublicUrl(data.path);
      return archivoURL;
    }
  } catch (error) {
    throw error
  }
};


export default uploadFile;


// https://ossisvnlzipyilifvydn.supabase.co/storage/v1/object/public/miTienda/prd-images/413tHDeJGRL._MCnd_AC_.jpg?t=2025-01-16T15%3A41%3A20.446Z
// https://ossisvnlzipyilifvydn.supabase.co/storage/v1/object/public/miTienda/prd-images/417bx91cc8L._AC_UL320_.jpg