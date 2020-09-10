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
              You'll find some of the projects I've worked on below.</p>
          </div>
        </div>
        <div className="row">
          <div className="my-4 col-12 col-lg-6">
            <div className="h-100 card" style={{ borderColor: 'black' }}>
              <div className="card-body" style={{ paddingBottom: '0px' }}>
                <h3 className="card-title">Predictable Chaos?</h3>
                <p style={{ fontSize: '1.2em' }}>
                  Predictable Chaos? is a data science project that strives to predict time-delayed chaotic dynamical systems with machine learning.
                  The research is conducted in conjunction with Dr. William Ott at the University of Houston and Dr. Bhargav Karamched at Florida State University.
                  We began working in December 2019 and received funding from UH in Summer 2020.
                  This is my presentation board for Undergraduate Research Day 2020.
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
                  TipTap is a simple typing game written in React with Bootstrap4. It has a toggleable word prompt and dark mode.
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
