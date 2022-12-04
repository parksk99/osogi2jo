import { useState } from "react";
import styled from "styled-components";

interface modalState {
  open: boolean;
  children: React.ReactNode;
}

export default function BasicModal(props: modalState) {
  const { open } = props;
  return (
    <Container>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <main>{props.children}</main>
          </section>
        ) : null}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  .modal > section {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background: rgba(255, 255, 255, 0.786);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    animation: modal-show 0.3s;
  }
  .modal > section > main {
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
