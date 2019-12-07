import React from "react"
import styled from "styled-components"
import nImg from "../../static/nn-night.jpg"
import dImg from "../../static/nn-day.jpg"
import logoImg from "../../static/nntc-logo.png"

let hours = new Date().getHours()
let bgImg = hours < 7 || hours > 18 ? nImg : dImg

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("${bgImg}") no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  height: 100%;
  filter: blur(3px);
  z-index: -100;
`

const Logo = styled.div`
  background: url("${logoImg}") no-repeat;
  background-size: 64px 64px;
  min-width: 64px;
  min-height: 64px;
`

const DayRow = props => (
  <tr>
    {
      <td>
        {props.weekDay}
        <br />
        {props.day}
      </td>
    }
    {props.children}
  </tr>
)

const LessonCell = props => (
  <td>
    <table className="lessonCell">
      <tbody>
        <tr>
          <td>
            <span role="img" aria-label="Предмет">
              📚
            </span>
          </td>
          <td>{props.name}</td>
        </tr>
        <tr>
          <td>
            <span role="img" aria-label="Преподаватель">
              🦉
            </span>
          </td>
          <td>{props.teacher}</td>
        </tr>
        <tr>
          <td>
            <span role="img" aria-label="Место">
              📍
            </span>
          </td>
          <td>{props.place}</td>
        </tr>
      </tbody>
    </table>
  </td>
)

export default ({ pageContext: { days } }) => (
  <main>
    <Background />
    <section>
      <table id="scheduleTable">
        <thead>
          <tr>
            <th style={{ width: "12%" }}>День недели</th>
            <th style={{ width: "22%" }}>1 пара</th>
            <th style={{ width: "22%" }}>2 пара</th>
            <th style={{ width: "22%" }}>3 пара</th>
            <th style={{ width: "22%" }}>4 пара</th>
          </tr>
        </thead>
        <tbody>
          {days}
          <DayRow weekDay="Понедельник" day="2 декабря">
            <LessonCell name="История" teacher="Аксельрод А. А." place="203" />
            <LessonCell name="История" teacher="Аксельрод А. А." place="203" />
            <LessonCell name="История" teacher="Аксельрод А. А." place="203" />
            <LessonCell name="История" teacher="Аксельрод А. А." place="203" />
          </DayRow>
          <DayRow weekDay="Вторник" day="3 декабря">
            <LessonCell name="История" teacher="Аксельрод А. А." place="203" />
            <LessonCell name="История" teacher="Аксельрод А. А." place="203" />
            <LessonCell name="История" teacher="Аксельрод А. А." place="203" />
            <LessonCell name="История" teacher="Аксельрод А. А." place="203" />
          </DayRow>
        </tbody>
      </table>
      <article style={{ width: "fit-content" }}>
        <a className="groupBtn" href="google.com">
          2ИСиП-18-1
        </a>
        <a className="groupBtn" href="google.com">
          2ИСиП-18-2
        </a>
        <a className="groupBtn" href="google.com">
          2ИСиП-18-3
        </a>
        <a className="groupBtn" href="google.com">
          2ИСиП-18-3
        </a>
        <a className="groupBtn" href="google.com">
          2ИСиП-18-3
        </a>
        <a className="groupBtn" href="google.com">
          2ИСиП-18-3
        </a>
        <a className="groupBtn" href="google.com">
          2ИСиП-18-3
        </a>
      </article>
      <footer>
        <Logo></Logo>
        
      </footer>
    </section>
  </main>
)
