console.log('Success');

// onclick functions
const getAllUsers = async () => {
  const data = await controller.sendRequest('/users');
  addUsers('allUsers', data);
};
const getAllOrders = async () => {
  const data = await controller.sendRequest('/orders');
  addOrders('allOrders', data);
};
const getFilteredOrders = async () => {
  const data = await controller.sendRequest('/orders', '?userId=4');
  addOrders('filteredOrders', data);
};

// element creation and addition functions
const addUsers = (elemSelector, data) => {
  const ulElem = document.getElementById(elemSelector);
  data.forEach((row) => {
    const topLi = document.createElement('li');
    const newUl = document.createElement('ul');
    for (const key in row) {
      let li = document.createElement('li');
      li.textContent = row[key];
      newUl.appendChild(li);
    }
    topLi.appendChild(newUl);
    ulElem.appendChild(topLi);
  });
};

const addOrders = (elemSelector, data) => {
  const ulElem = document.getElementById(elemSelector);
  data.forEach((row) => {
    const topLi = document.createElement('li');
    const newUl = document.createElement('ul');

    const priceLi = document.createElement('li');
    priceLi.textContent = row.price;

    const productLi = document.createElement('li');
    productLi.textContent = row.product;

    const statusLi = document.createElement('li');
    statusLi.textContent = row.status;

    const userIdLi = document.createElement('li');
    userIdLi.textContent = row.userId;

    newUl.appendChild(priceLi);
    newUl.appendChild(productLi);
    newUl.appendChild(statusLi);
    newUl.appendChild(userIdLi);
    topLi.append(newUl);
    ulElem.append(topLi);
  });
};

// class for handling requests to the server
class RequestController {
  #baseUrl = 'http://localhost:3000';
  #headers = {
    Authorization: 'Bearer as33dienWJawEgm!@44SDeuasrl48zdsl!_',
  };

  async sendRequest(path, queryParams = '') {
    const url = this.#baseUrl + path + queryParams;
    const response = await fetch(url, {
      headers: this.#headers,
    });
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      console.error(response.statusText);
      return null;
    }
  }
}
const controller = new RequestController();
