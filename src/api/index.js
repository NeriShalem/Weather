

export const getWeatherData = async (city) => {
    try {
        const data = await fetch(
            `${process.env.REACT_APP_API_URL}?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        );
        return await data.json();
    }
    catch (error) {
        console.log(error);
        return { cod: "404" };
    }
}