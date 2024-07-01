import {toast} from "react-toastify";
import Alert from "../../components/Alert/Alert";

const showSuccess = (title, text) => {
    toast.success(
        <Alert
            title={title}
            text={text}
        />
    )
}

const showError = (title, text) => {
    toast.error(
        <Alert
            title={title}
            text={text}
        />
    )
}

const showInfo = (title, text) => {
    toast.info(
        <Alert
            title={title}
            text={text}
        />
    )
}


export {
    showSuccess,
    showError,
    showInfo
}