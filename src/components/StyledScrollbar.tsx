import styled from "@emotion/styled";

const StyledScrollbar = styled.div`
  /* width */
  .section::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .section::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  .section::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  .section::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default StyledScrollbar;
