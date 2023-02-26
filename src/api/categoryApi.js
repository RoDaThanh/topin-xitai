import axiosClient from './axiosClient';

const productServiceUri = 'product-service/api';
const categoryApi = {

    getAllCategories(params) {
        const uri = `${[productServiceUri]}/categories`;
        return axiosClient.get(uri,{params: params});
    },

    getCategory(id) {
        const uri = `${[productServiceUri]}/categories/${id}`;
        return axiosClient.get(uri);
    },

};

export default categoryApi;