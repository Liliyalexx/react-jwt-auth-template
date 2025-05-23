const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`
const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  const show = async(hootId) =>{
    try {
        const res = await fetch(`${BASE_URL}/${hootId}`, {
            headers: {
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        });
        return res.json();
    } catch (error) {
        console.error(error);
    }
  }
  export {  index, show };//named export suntax(used to export mnultiple module)