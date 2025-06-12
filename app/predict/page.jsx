"use client";

import { useState } from "react";
import { CloseOutlined, InboxOutlined } from "@ant-design/icons";
import { Button, Image, Typography } from "antd";
import { SKIN_CARE_INGREDIENTS } from "@/predict/Data/KeyIngredients";
import axios from "axios";
import Dragger from "antd/es/upload/Dragger";
import Link from "next/link";

export default function Predict() {
  const predictUrl = process.env.NEXT_PUBLIC_API_URL;

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const props = {
    name: "file",
    accept: ".jpg,.jpeg,.png",
    multiple: false,
    beforeUpload: (file) => {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImage(file);
      return false;
    },
  };

  const submit = (status) => {
    if (status) {
      setLoading(true);
      axios
        .post(
          `${predictUrl}/predict`,
          { file: image },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          if (res.data.status === "success") {
            const probability = Math.max(...res.data.data.prob);
            const index = res.data.data.prob.findIndex(
              (x) => x === probability
            );
            const skinType = res.data.data.classes[index];
            setPrediction({
              result: res.data.data.classes[index],
              percentage: (probability * 100).toPrecision(3) + "%",
              ingredients: SKIN_CARE_INGREDIENTS[skinType],
            });
          } else {
          }
        })
        .catch((error) => console.error("Error:", error))
        .finally(() => setLoading(false));
    } else {
      setImage(null);
      setPrediction(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center sm:bg-gray-100 sm:justify-center sm:pt-0">
      <div className="w-full overflow-hidden px-12 py-8 sm:max-w-2xl sm:rounded-lg sm:bg-white sm:shadow-md lg:max-w-4xl xl:max-w-6xl">
        <div className="py-16">
          <div className="mx-auto max-w-lg space-y-8">
            <Link href="/home">
              <Typography.Title className="block text-center" level={3}>
                <span className="font-caveat text-5xl font-bold link">RupaKoe</span>
              </Typography.Title>
            </Link>
            {!prediction ? (
              <>
                <p className="text-center" hidden={image}>
                  Silakan unggah foto wajah Anda,{' '}
                  <span className="font-semibold">kami tidak akan menyimpannya</span>.
                </p>
                <div>
                  {!image ? (
                    <Dragger {...props}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited
                        from uploading company data or other banned files.
                      </p>
                    </Dragger>
                  ) : (
                    <div className="relative w-full rounded-xl border py-6 text-center">
                      <Image className="max-w-40 sm:max-w-96" src={imageUrl} />
                      <Button
                        type="link"
                        className="!absolute right-0 top-0 w-0"
                        onClick={() => {
                          setImage(null);
                          setImageUrl(null);
                        }}
                      >
                        <CloseOutlined />
                      </Button>
                    </div>
                  )}
                </div>

                <Button
                  type="primary"
                  size="large"
                  disabled={!image}
                  onClick={() => submit(true)}
                  loading={loading}
                  block
                >
                  Submit
                </Button>
              </>
            ) : (
              <>
                <div className="w-full gap-4 space-y-4 rounded-xl border p-6">
                  <Typography.Title className="block text-center" level={3}>
                    Hasil Analisis
                  </Typography.Title>
                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <Image className="max-w-60" src={imageUrl} />
                    <div className="grow text-center">
                      <Typography.Title level={4}>
                        {prediction.result}
                      </Typography.Title>
                      <Typography.Title level={5}>
                        {prediction.percentage}
                      </Typography.Title>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <hr className="hidden sm:block grow" />
                    <div>
                      Bahan skin care yang paling cocok untukmu
                      <span className="sm:hidden">:</span>
                    </div>
                    <hr className="hidden sm:block grow" />
                  </div>
                  <ol className="list-decimal list-inside space-y-2">
                    {prediction.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-sm leading-relaxed">
                        <span className="font-semibold">
                          {ingredient.split(" - ")[0]}
                        </span>
                        <br className="sm:hidden" />
                        {ingredient.includes(" - ") && (
                          <span className="text-gray-600">
                            <span className="not-sm:hidden mx-1">-</span>
                            {ingredient.split(" - ")[1]}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex space-x-6">
                  <Button
                    size="large"
                    disabled={!image}
                    onClick={() => submit(false)}
                    block
                  >
                    Analisis Ulang
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
