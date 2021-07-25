import Swal from 'sweetalert2'

const timerDefault = 2000

const Alert = (textInfo: string, type?: any, title?: string) => {

  switch (type) {
    case 'error':
      return (
        Swal.fire({
          icon: 'error',
          title: title || "Opps!",
          text: textInfo,
          showConfirmButton: false,
          timer: timerDefault
        })
      )

    case 'success':
      return (
        Swal.fire({
          icon: 'success',
          title: title || "Exito!",
          text: textInfo,
          showConfirmButton: false,
          timer: timerDefault
        })
      )

    case 'loading':
      return (
        Swal.fire({
          title: title || "Información",
          text: textInfo,
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading()
          },
        })
      )

    default:
      return (
        Swal.fire({
          title: title || "Información",
          text: textInfo,
          showConfirmButton: false,
        })
      )
  }

}

export default Alert
