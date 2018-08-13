export const productID = (x) =>{
    return{
        type: 'idProduct',
        payload: x
    }
}

export const kategoriID = (x) =>{
    return{
        type: 'idkategori',
        payload: x
    }
}

export const loginID = (x) =>{
    return{
        type: 'idLogin',
        payload: x
    }
}

export const idInvoice = (x) =>{
    return{
        type: 'idInvoice',
        payload: x
    }
}

export const searching = (x) =>{
    return{
        type:'cari',
        payload: x
    }
}

export const namaID = (x) =>{
    return{
        type:'idName',
        payload: x
    }
}