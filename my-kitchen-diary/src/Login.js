import React, { useState } from "react";
import { Container, Form, Button, input } from "react-bootstrap";

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div class="card border-primary mb-6 margin-top-80px vertical-align">
          <h3 class="card-header">Login</h3>
          <div class="card-body">
            <p class="card-text">
              <div class="card-text row">
                <div class="col vertical-align">
                  <label for="idusername">Enter username</label>
                </div>
                <div class="col">
                  <input
                    type="input"
                    class="form-control"
                    id="idusername"
                    aria-describedby="idusername"
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div class="card-text row margin-top-20px">
                <div class="col vertical-align">
                  <label for="idpassword">Enter password</label>
                </div>
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    id="idusername"
                    aria-describedby="idpassword"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div class="card-text row margin-top-20px">
                <div class="col vertical-align"></div>
                <div class="col flex-right">
                  <button type="button" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </p>
          </div>
        </div>
        {/* <table class="table padding-top-table no-border ">
          <thead>
            <tr>
              <th scope="col" class="col-md-4"></th>
              <th scope="col" class="col-md-4"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-active">
              <th></th>
              <th></th>
              <th></th>
              <th scope="row table-active">Login</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <label for="idusername">Enter username</label>
              </td>
              <td>
                <input
                  type="input"
                  class="form-control"
                  id="idusername"
                  aria-describedby="idusername"
                  placeholder="Enter username"
                />
              </td>
            </tr>
          </tbody>
        </table> */}
      </Form>
    </Container>
  );
};

export default LoginPage;
