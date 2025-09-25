import { Button } from "antd";
import React, { useState } from "react";

interface Info {
  id: number;
  name: string;
}
let id = 1;

export default function Demo() {
  const [name, setName] = useState<string>("");


  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInfo: Info = {
      id: id++,
      name: name,
    };
    const infoClones = [...infos, newInfo];
    setInfos(infoClones);
    localStorage.setItem("infos", JSON.stringify(infoClones));
    setName("");
  };

  const handleDelete = (id: number) => {
    const infoDele = infos.filter((i) => i.id !== id);
    setInfos(infoDele);
    localStorage.setItem("infos", JSON.stringify(infoDele));
  };

  return (
    <div className="flex flex-col justify-center items-center h-[500px] gap-y-6">
      {/* Ô nhập liệu + nút thêm */}
      <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
        <input
          type="text"
          className="border border-gray-400 h-8 px-2 rounded"
          placeholder="Nhập tên..."
          onChange={handleName}
          value={name}
        />
        <Button type="primary" htmlType="submit">
          Thêm
        </Button>
      </form>

      {/* Danh sách hiển thị */}
      <div className="flex flex-col gap-y-4">
        {infos.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-3 rounded w-[290px]"
          >
            <p className="m-0">{item.name}</p>
            <Button
              onClick={() => handleDelete(item.id)}
              danger
              size="small"
            >
              Xóa
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
