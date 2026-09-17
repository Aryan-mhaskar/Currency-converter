import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [currencies, setCurrencies] = useState({});

    useEffect(() => {
        // Get exchange rates
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
            })
            .catch((error) => {
                console.log("Rate API Error:", error);
            });

        // Get all currencies
        fetch(
            "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
        )
            .then((res) => res.json())
            .then((res) => {
                setCurrencies(res);
            })
            .catch((error) => {
                console.log("Currency API Error:", error);
            });

    }, [currency]);

    return {
        rates: data,
        currencies: currencies
    };
}

export default useCurrencyInfo;