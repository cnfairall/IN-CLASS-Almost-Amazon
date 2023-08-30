import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
    <div class="form-group">
      <label for="image">Customer Name</label>
      <input type="text" class="form-control" id="customerName" placeholder="Customer Name" value="${obj.customerName || ''}" required>
    </div>
    <div class="form-group">
      <label for="title">Email</label>
      <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ''}"required>
    </div>
    <select class="form-select" id="orderType" aria-label="Default select example">
      <option selected>Select Order Type</option>
      <option value="Online">Online</option>
      <option value="In-person">In-person</option>
    </select>
    <button type="submit" class="btn btn-primary mt-3">Submit Order</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
