import styled from 'styled-components';

interface SpanProps {
  isCompleted: boolean;
}

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4rem;
`;

export const FormTaskContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: -1.5rem;

  input {
    width: 100%;
    background: var(--gray-500);
    color: var(--gray-300);
    border: solid var(--gray-700) 0.0625rem;
    height: 3.375rem;
    border-radius: 8px;
    padding: 1rem;
    line-height: 1.4;
    max-width: 638px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: var(--gray-100);
    background-color: var(--blue-dark);
    border: 0;
    gap: 8px;
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;

    &:not(:disabled):hover {
      background: var(--blue);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;
export const TaskContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  max-width: 736px;
`;
export const TaskCount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 1.5625rem;
`;

export const SpanContent = styled.span<SpanProps>`
  span {
    font-weight: 700;
    color: ${({ isCompleted }) =>
      isCompleted ? 'var(--purple)' : 'var(--blue)'};
  }

  & > span:last-child {
    background: var(--gray-400);
    border-radius: 62.4375rem;
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    margin-left: 0.5rem;
    color: var(--gray-200);
  }
`;
