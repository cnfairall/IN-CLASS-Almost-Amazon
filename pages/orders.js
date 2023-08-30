import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders Found</h1>';
  renderToDOM('#store', domString);
};

const showOrders = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-order-btn">Add An Order</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  if (!array.length) {
    domString += '<p>No Orders Found</p>';
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.customerName}</h5>
          Customer Email: <a href="mailto:${item.email}">${item.email}</a>
          <p>Order Type: ${item.orderType}</p>
          <i class="fas fa-edit btn btn-info" id="update-order--${item.firebaseKey}"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-order-btn--${item.firebaseKey}"></i>
        </div>
      </div>
      `;
    });
  }
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrders };
