import React from 'react';
import { HiCode, HiLink } from 'react-icons/hi';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row" style={{ marginBottom: '50px', marginTop: '50px' }}>
          <div className="col-12">
            <h1>Hello!</h1>
            <p style={{ fontSize: '1.5em' }}>
              My name is Tammy Lam.
              I'm currently a junior at the University of Houston, pursuing a Bachelors of Science in Mathematics with a concentration in Mathematical Finance.
              I enjoy programming, doodling, and practicing minimalism.
              You'll find the projects I've worked on below.</p>
          </div>
        </div>
        <div className="row">
          <div className="my-4 col-12 col-lg-6">
            <div className="h-100 card" style={{ borderColor: 'black' }}>
              <div className="card-body" style={{ paddingBottom: '0px' }}>
                <h3 className="card-title">Predictable Chaos?</h3>
                <p style={{ fontSize: '1.2em' }}>
                  I started working on this project in December 2019 with Dr. William Ott of the Ergodic Theory and Dynamical Systems research group at UH.
                  We're working on studying, and predicting, chaotic series with reservoir computing.
                  Our research was funded in the Summer of 2020 by UH. This is a board I made for Undergraduate Research presentations.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-end" style={{ background: 'transparent', border: '0px', paddingBottom: '20px', paddingTop: '0px' }}>
                <a href="https://github.com/minbin/esn" rel="noopener noreferrer" target="_blank">
                  <button className="mx-2 btn btn-outline-dark"><HiCode size={20} /><span className="ml-2">Code</span></button>
                </a>
                <a href="/uh-surf" rel="noopener noreferrer" target="_blank">
                  <button className="mx-2 btn btn-outline-dark"><HiLink size={20} /><span className="ml-2">Page</span></button>
                </a>
              </div>
            </div>
          </div>
          <div className="my-4 col-12 col-lg-6">
            <div className="h-100 card" style={{ borderColor: 'black' }}>
              <div className="card-body" style={{ paddingBottom: '0px' }}>
                <h3 className="card-title">TipTap</h3>
                <p style={{ fontSize: '1.2em' }}>
                  A simple typing game made in React. Written for practice.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-end" style={{ background: 'transparent', border: '0px', paddingBottom: '20px', paddingTop: '0px' }}>
                <a href="/tiptap" rel="noopener noreferrer" target="_blank">
                  <button className="mx-2 btn btn-outline-dark"><HiLink size={20} /><span className="ml-2">Page</span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
