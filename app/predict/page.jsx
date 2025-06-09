'use client';

import { useState } from 'react';
import { CloseOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Divider, Image, Typography } from 'antd';
import axios from 'axios';
import Dragger from 'antd/es/upload/Dragger';

export default function Predict() {
  const predictUrl = process.env.NEXT_PUBLIC_API_URL;
  const tagline = 'Cek Kulit Wajah Gratis Online';

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const props = {
    name: 'file',
    accept: '.jpg,.jpeg,.png',
    multiple: false,
    beforeUpload: ((file) => {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImage(file);
      return false; // Prevent auto upload
    }),
  };

  const submit = (status) => {
    if (status) {
      setLoading(true);
      axios
        .post(`${predictUrl}/predict`, { file: image }, {
          headers: {
            'Content-Type': 'multipart/form-data',  // Only set necessary client headers
          },
        })
        .then((res) => {
          if (res.data.status === 'success') {
            const probability = Math.max(...res.data.data.prob);
            const index = res.data.data.prob.findIndex((x) => x === probability);
            setPrediction({
              result: res.data.data.classes[index],
              percentage: (probability * 100).toPrecision(3) + '%',
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
    <div className="flex min-h-screen flex-col items-center bg-gray-100 sm:justify-center sm:pt-0">
      <div className="w-full overflow-hidden px-12 py-8 sm:max-w-2xl sm:rounded-lg sm:bg-white sm:shadow-md lg:max-w-4xl xl:max-w-6xl">
        <div className="py-16">
          <div className="mx-auto max-w-lg space-y-8">
            {!prediction ? (
              <>
                <Typography.Title className="block text-center" level={3}>
                  RupaKoe: {tagline}
                </Typography.Title>

                <div>
                  {!image ? (
                    <Dragger {...props}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading
                        company data or other banned files.
                      </p>
                    </Dragger>
                  ) : (
                    <div className="relative w-full rounded-xl border py-6 text-center">
                      <Image
                        width={400}
                        src={imageUrl}
                      />
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
                <Typography.Title className="block text-center" level={2}>
                  Hasil Analisis
                </Typography.Title>

                <div className="w-full space-x-4 rounded-xl border p-6">
                  <div className="flex space-x-6 items-center">
                    <Image
                      width={240}
                      src={imageUrl}
                    />
                    <div className="grow text-center">
                      <Typography.Title level={3}>{prediction.result}</Typography.Title>
                      <Typography.Title level={4}>{prediction.percentage}</Typography.Title>
                    </div>
                  </div>
                  <Divider className="!border-gray-400">Bahan skin care yang paling cocok untukmu</Divider>
                  <ol className="list-decimal list-inside">
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                  </ol>
                </div>

                <div className="flex space-x-6">
                  <Button size="large" disabled={!image} onClick={() => submit(false)} block>
                    Analisis Ulang
                  </Button>
                  <Button type="primary" size="large" disabled={!image} block>
                    Kirim Feedback
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
