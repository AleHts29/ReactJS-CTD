import { useState } from 'react'

export const useCountItemsComponent = () => {
    const [countItems, setcountItems] = useState(0)

    const componentCount = (value) => {
        console.log(value);
        setcountItems(countItems + value)
    }
    return {
        countItems,
        componentCount
    }
}

