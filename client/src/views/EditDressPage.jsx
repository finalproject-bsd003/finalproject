import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AddEditDressForm from "../components/AddEditDressForm"
import { detailDressFetch } from "../stores/actions/actionCreator"

const EditDressPage = () => {

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailDressFetch(id))
    }, [id])

    const { detailDress } = useSelector((state) => state?.dress)

    console.log(detailDress)
    const { result } = detailDress
    const { resultImage } = detailDress

    return (
        <AddEditDressForm detailDressFromPage={{ result, resultImage }} />
    )
}

export default EditDressPage