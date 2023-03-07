import styled from 'styled-components';

export const NoTaskContent = styled.div`
  border-top: 1px solid var(--gray-400);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
`;

export const TaskContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: var(--gray-500);
  border: 1px solid var(--gray-400);
  border-radius: 8px;
  padding: 1rem;

  & + div {
    margin-top: 0.75rem;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    color: var(--gray-300);

    &:hover {
      background-color: var(--gray-400);
      color: var(--danger);
    }
  }
`;

export const CheckboxContent = styled.div`
  display: flex;
  align-items: baseline;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label::before {
    content: '';
    width: 1rem;
    height: 1rem;
    border: 2px solid var(--blue);
    border-radius: 15px;
    background-color: transparent;
    display: block;
    margin-right: 10px;
    min-width: 1rem;
  }

  input[type='checkbox']:hover + label::before {
    border: 2px solid var(--blue-dark);
  }

  input[type='checkbox']:checked + label::before {
    border-color: var(--purple-dark);
    background: var(--purple-dark);
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
    background-position: center;
    color: var(--gray-300);
    text-decoration-line: line-through;
  }

  input[type='checkbox']:checked:hover + label::before {
    border-color: var(--purple);
    background: var(--purple);
    background-position: center;
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
  }

  input[type='checkbox']:checked + label {
    color: var(--gray-300);
    text-decoration-line: line-through;
  }

  label {
    display: flex;
    max-width: 37.5rem;
    color: var(--gray-100);
  }
`;
