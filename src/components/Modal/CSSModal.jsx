import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 50; */

  background: rgba(243, 240, 240, 0.6);
`;
export const ModalWindow = styled.div`
  display: block;
  max-height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
`;
