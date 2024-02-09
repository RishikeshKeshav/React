import {useState,useEffect} from 'react';


function useCurrencyInfo(currency){

    useState(()=>{
     fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json'
     )
    },)
}
