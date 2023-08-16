// // import React, { useState } from "react";
// // import { Dialog } from "primereact/dialog";
// // import { Button } from "primereact/button";
// // import img from "../../../../assets/Rectangle16.png";
// // import Image from "next/image";
// // import Avatar from "react-avatar-edit";

// // const ProfileImage = () => {
// //   const [dialogs, setdialogs] = useState(false);
// //   const [imgCrop, setimgCrop] = useState(null);
// //   const [storeImage, setstoreImage] = useState([]);

// //   const onCrop = (view: any) => {
// //     setimgCrop(view);
// //   };
// //   const onClose = () => {
// //     setimgCrop(null);
// //   };

// //   const saveImage = () => {
// //     setstoreImage([...storeImage, { imgCrop }]);
// //     setdialogs(false);
// //   };

// //   const profileImageShow = storeImage.map((item) => item.imgCrop);

// //   return (
// //     <div>
// //       <div className="profile_img text-center p-4">
// //         <div className="div">
// //           <Image
// //             style={{
// //               width: "200px",
// //               height: "200px",
// //               borderRadius: "50%",
// //               objectFit: "cover",
// //             }}
// //             src={profileImageShow.length ? profileImageShow : img}
// //             alt=""
// //             onClick={() => setdialogs(true)}
// //           />
// //           {/* <Button onClick={() => setdialogs(true)}>dialog</Button> */}
// //           <Dialog
// //             visible={dialogs}
// //             header={() => (
// //               <p className="text-2x1 font-semibold textColor">Update Profile</p>
// //             )}
// //             onHide={() => setdialogs(false)}
// //           >
// //             <div className="confirmation-content flex flex-column align-items-center">
// //               <div className=" flex flex-column align-items-center mt-5">
// //                 <div className="flex justify-content-around w-12 mt-4">
// //                   <Avatar
// //                     width={400}
// //                     height={300}
// //                     onClose={onClose}
// //                     onCrop={onCrop}
// //                   />
// //                   <Button onClick={saveImage} label="Save" icon="pi pi-check" />
// //                 </div>
// //               </div>
// //             </div>
// //           </Dialog>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileImage;
// // import React, { useState } from "react";
// // import { Dialog } from "primereact/dialog";
// // import { Button } from "primereact/button";
// // import img from "../../../../assets/Rectangle16.png";
// // import Image from "next/image";
// // import Avatar from "react-avatar-edit";

// // const ProfileImage: React.FC = () => {
// //   const [dialogs, setDialogs] = useState(false);
// //   const [imgCrop, setImgCrop] = useState<string | null>(null);
// //   const [storeImage, setStoreImage] = useState<string[]>([]);

// //   const onCrop = (view: string) => {
// //     setImgCrop(view);
// //   };

// //   const onClose = () => {
// //     setImgCrop(null);
// //   };

// //   const saveImage = () => {
// //     if (imgCrop) {
// //       setStoreImage([...storeImage, imgCrop]);
// //       setDialogs(false);
// //     }
// //   };

// //   const profileImageShow = storeImage.length
// //     ? storeImage[storeImage.length - 1]
// //     : img;

// //   return (
// //     <div>
// //       <div className="profile_img text-center p-4">
// //         <div className="div">
// //           <Image
// //             style={{
// //               width: "200px",
// //               height: "200px",
// //               borderRadius: "50%",
// //               objectFit: "cover",
// //             }}
// //             src={profileImageShow}
// //             alt=""
// //             onClick={() => setDialogs(true)}
// //           />
// //           <Dialog
// //             visible={dialogs}
// //             header={() => (
// //               <p className="text-2xl font-semibold textColor">Update Profile</p>
// //             )}
// //             onHide={() => setDialogs(false)}
// //           >
// //             <div className="confirmation-content flex flex-column align-items-center">
// //               <div className="flex flex-column align-items-center mt-5">
// //                 <div className="flex justify-content-around w-12 mt-4">
// //                   <Avatar
// //                     width={400}
// //                     height={300}
// //                     onClose={onClose}
// //                     onCrop={onCrop}
// //                   />
// //                   <Button onClick={saveImage} label="Save" icon="pi pi-check" />
// //                 </div>
// //               </div>
// //             </div>
// //           </Dialog>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileImage;

// import React, { useState } from "react";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import img from "../../../../assets/Rectangle16.png";
// import Image from "next/image";
// import Avatar from "react-avatar-edit";

// const ProfileImage: React.FC = () => {
//   const [dialogs, setDialogs] = useState(false);
//   const [imgCrop, setImgCrop] = useState<string | ArrayBuffer | null>(null);
//   const [storeImage, setStoreImage] = useState<Array<string | ArrayBuffer>>([]);

//   const onCrop = (view: string | ArrayBuffer) => {
//     setImgCrop(view);
//   };

//   const onClose = () => {
//     setImgCrop(null);
//   };

//   const saveImage = () => {
//     if (imgCrop) {
//       setStoreImage([...storeImage, imgCrop]);
//       setDialogs(false);
//     }
//   };

//   const profileImageShow = storeImage.length
//     ? storeImage[storeImage.length - 1]
//     : img;

//   return (
//     <div>
//       <div className="profile_img text-center p-4">
//         <div className="div">
//           <Image
//             width={200}
//             height={200}
//             className="profile-image"
//             src={profileImageShow as string}
//             alt=""
//             onClick={() => setDialogs(true)}
//           />
//           <Dialog
//             visible={dialogs}
//             onHide={() => setDialogs(false)}
//             header={() => (
//               <p className="text-2xl font-semibold textColor">Update Profile</p>
//             )}
//           >
//             <div className="confirmation-content flex flex-column align-items-center">
//               <div className="flex flex-column align-items-center mt-5">
//                 <div className="flex justify-content-around w-12 mt-4">
//                   <Avatar
//                     width={400}
//                     height={300}
//                     onClose={onClose}
//                     onCrop={onCrop}
//                   />
//                   <Button onClick={saveImage} label="Save" icon="pi pi-check" />
//                 </div>
//               </div>
//             </div>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileImage;

import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const ProfileImage: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && "+ Upload Photo"}
      </Upload>
    </ImgCrop>
  );
};

export default ProfileImage;
