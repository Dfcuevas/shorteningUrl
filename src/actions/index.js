const urlPrueba = "https://estapruebalahago.com";

export default async function getUrlShorten(url) {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
