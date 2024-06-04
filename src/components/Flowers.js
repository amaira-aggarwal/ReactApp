import React from "react";
import { Link } from "react-router-dom";
import "./Flowers.css";

export default function Flowers() {
  return (
    <>
      <div className="overall">
        <h4 style={{ textAlign: "center" }}>
          <strong>Flower Page</strong>
        </h4>
        <form action="">
          <input
            type="text"
            id="search-input"
            placeholder="Search for flower images"
          />
          <button id="search-button">Search</button>
        </form>
        <div class="search-results">
          <div class="search-result">
            <img
              src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tulips"
            />
            <Link
              to="https://unsplash.com/photos/shallow-focus-photography-of-white-and-pink-petaled-flowers-fY1ECB1RCd0"
              target="_blank"
            >
              Tulips
            </Link>
          </div>
          <div class="search-result">
            <img
              src="https://images.unsplash.com/photo-1575178114667-c8a832c61f45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Peonies"
            />
            <Link
              to="https://unsplash.com/photos/pink-rose-flowers-in-vase-A_fBQe39A4k"
              target="_blank"
            >
              Peonies
            </Link>
          </div>
          <div class="search-result">
            <img
              src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cherry Blossom"
            />
            <Link
              to="https://unsplash.com/photos/low-angle-photo-of-cherry-blossoms-tree-sKJ7zSylUao"
              target="_blank"
            >
              Cherry Blossom
            </Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
