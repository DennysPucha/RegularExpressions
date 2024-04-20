import confetti from 'canvas-confetti';
import swal from 'sweetalert2';
export const onSubmitHandler = (selectedExpresion) => {
  if (selectedExpresion === '') {
    return swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Seleccione una expresión'
    });
  } else {
    return confetti({particleCount:150});
  }
};