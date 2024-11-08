// Создайте компонент Box, который оборачивает содержимое,
// переданное в children, в div с определенными стилями
// (например, с рамкой и отступами).
// ● Используйте Box для оборачивания различных элементов
// (текста, картинок, других компонентов), чтобы
// продемонстрировать его переиспользуемость.
import { Children } from 'react';

export default function Box({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        className="box"
        style={{
          border: '1px solid black',
          padding: '10px',
          width: '200px',
          height: 'auto'
        }}
      >
        {children}
      </div>
    </div>
  );
}