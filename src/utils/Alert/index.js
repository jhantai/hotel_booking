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

export {
    showSuccess
}