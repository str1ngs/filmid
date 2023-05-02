

function OtsiFilmi () {
    return (
      <>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Pealkiri"
            aria-label="Filmi pealkiri"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Otsi
            </button>
          </div>
        </div>
      </>
    );
}

export default OtsiFilmi;