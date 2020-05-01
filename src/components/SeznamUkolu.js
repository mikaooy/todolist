import React from "react"
import JednotliveUkoly from "./JednotliveUkoly"

const SeznamUkolu = (props) => {
  return props.ukoly.map((ukol) => (
    <JednotliveUkoly
      key={ukol.id}
      ukol={ukol}
      oznacZaHotove={props.oznacZaHotove}
      smazatUkol={props.smazatUkol}
    />
  ))
}

export default SeznamUkolu
