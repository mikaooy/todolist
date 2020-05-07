import React from "react"

const JednotliveUkoly = (props) => {
  const style = {
    textDecoration: props.ukol.completed ? "line-through" : "none",
  }

  const { id, title } = props.ukol

  return (
    <div className="row">
      <div className="col-sm">
        <div className="card text-center text-white bg-dark mb-3 mt-3">
          <div className="card-header">Úkol</div>
          <div className="card-body">
            <h5 style={style} className="card-title">
              {title}
            </h5>
            <div className="d-flex justify-content-between">
              <button
                className="delete btn btn-outline-success"
                onClick={() => props.oznacZaHotove(id)}
              >
                {props.ukol.completed ? "Nedokončeno" : "Dokončeno"}
              </button>
              <button
                className="delete btn btn-danger"
                onClick={() => props.smazatUkol(id)}
              >
                smazat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JednotliveUkoly
