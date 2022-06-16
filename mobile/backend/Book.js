


const search = async(query="love") => {
   const data = await fetch(`GET https://www.googleapis.com/books/v1/volumes?q=${query}&filter=free-ebooks&key=`+"AIzaSyC879tvIWZekTaH_jTwgQsOZJtCRuQJqBE");
   console.log(data)

}
search();

