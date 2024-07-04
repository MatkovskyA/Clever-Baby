import Group from "../group/Group"
import Button from "../button/Button"
import Popup from "../modal/Modal"

import "./_groups.scss"
import "../../assets/styles/_variables.scss"
import React from "react"
import { useState } from "react"
import Modal from "../modal/Modal"

const Groups = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const togglePopup = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <section className="groups">
      <div className="container">
        <div className="groups-header">
          <h2>Наши группы</h2>
          <p>В группах занимается до 5 человек. Все дети в группе примерно одного возраста и уровня знаний.</p>
        </div>
        <div className="groups-wrapper">
          <div className="groups-inner groups-inner-blue">
            <Group
              title={"Бэбики-1"}
              count={"1 раз "}
              time={"1,5 часа"}
              price={"2500 P "}
            />
            <Button
              text={"Записаться"}
              btnStyle={"blue-btn"}
            />
          </div>
          <div className="groups-inner groups-inner-yellow">
            <Group
              title={"Бэбики-2"}
              count={"2 раз "}
              time={"1,5 часа"}
              price={"4000 P "}
            />
            <Button
              text={"Записаться"}
              btnStyle={"yellow-btn"}
              />
          </div>
          <div className="groups-inner groups-inner-pink">
            <Group
              title={"Бэбики-3"}
              count={"3 раз "}
              time={"1 час"}
              price={"4000 P "}
            />
            <Button
              text={"Записаться"}
              btnStyle={"pink-btn"}
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Groups