export const productGetters = {
    allProducts: (state, getters) => {
        console.log("getter")
        return state.products
    },
    productById: (state, getters) => id => {
        if (getters.allProducts.length > 0) {
            return getters.allProducts.filter(p => p._id == id)[0]
        } else {
            return state.product
        }
    },

}

export const manufacturerGetters = {
    // All manufacturers
    allManufacturers: state => state.manufacturers
}