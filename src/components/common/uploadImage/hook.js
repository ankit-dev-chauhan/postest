import React from 'react'
import { uploadProfileImage } from './api';

export const UploadImageFile = () => {
    const [loader, setLoader] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const handleImageChange = (e, image) => {
        const file = e.target.files[0];
        const fileName = e.target.files[0].name;
        const fileInputName = e.target.name;

        if (!file) {
            toast.warn("image is not selected", { autoClose: 1000 });
            return false;
        }
        if (!fileName.match(/\.(jpg|jpeg|png|svg|webp)$/)) {
            toast.warn("Please select valid image.", { autoClose: 1000 });
            return false;
        }
        if (!fileName) {
            return false;
        }
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        fileInputName == "image"
            ? (reader.onload = () => {
                const bannerImage = `data:${file.type};base64,${btoa(reader.result)}`;
                uploadimage({
                    image: bannerImage,
                    imageName: fileName.split(".").slice(0, -1).join("."),
                });
            })
            : (reader.onload = () => {
                const thumbImage = `data:${file.type};base64,${btoa(reader.result)}`;
                uploadimage({
                    image: thumbImage,
                    imageName: fileName.split(".").slice(0, -1).join("."),
                });
            });
        // for loader
        setLoader(true);
    };

    const { mutate: uploadimage } = useMutation(
        (payload) => uploadProfileImage(payload),
        {
            onSuccess: (data) => {
                if (data?.data?.is_success) {
                    setImageUrl(data.data.url),
                        setLoader(false);
                    toast.success(data?.data?.message)
                } else if (data?.data?.message) {
                }
            },
        }
    );


    return {
        handleImageChange,
        imageUrl,
        loader
    }
}
