class MeshokAPI {
    constructor(token) {
        this.baseUrl = 'https://api.meshok.net/sAPIv1/';
        this.token = token;
    }

    sendRequest(method, params = {}) {
        const url = this.baseUrl + method;
        const headers = {
            'Authorization': 'Bearer ' + this.token
        };

        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: new URLSearchParams(params)
        })
        .then(response => response.json());
    }

    getItemList() {
        return this.sendRequest('getItemList');
    }

    getFinishedItemList() {
        return this.sendRequest('getFinishedItemList');
    }

    getUnsoldFinishedItemList() {
        return this.sendRequest('getUnsoldFinishedItemList');
    }

    getSoldFinishedItemList() {
        return this.sendRequest('getSoldFinishedItemList');
    }

    getItemInfo(id) {
        return this.sendRequest('getItemInfo', { id: id });
    }

    getAccountInfo() {
        return this.sendRequest('getAccountInfo');
    }

    getCommonDescriptionList() {
        return this.sendRequest('getCommonDescriptionList');
    }

    getSubCategory(id) {
        return this.sendRequest('getSubCategory', { id: id });
    }

    getCategoryInfo(id) {
        return this.sendRequest('getCategoryInfo', { id: id });
    }

    getCurencyList() {
        return this.sendRequest('getCurencyList');
    }

    getCountryList() {
        return this.sendRequest('getCountryList');
    }

    getCitiesList(id) {
        return this.sendRequest('getCitiesList', { id: id });
    }

    stopSale(id) {
        return this.sendRequest('stopSale', { id: id });
    }

    relistItem(id) {
        return this.sendRequest('relistItem', { id: id });
    }

    deleteItem(id) {
        return this.sendRequest('deleteItem', { id: id });
    }

    listItem(params) {
        return this.sendRequest('listItem', params);
    }

    updateItem(params) {
        return this.sendRequest('updateItem', params);
    }
}
