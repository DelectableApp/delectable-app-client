export default function ({ store, error }) {
  if (store.state.account.isAuthenticated) {
    error({
      message: 'vous ne pouvez pas voir cette page en etant connecté',
      statusCode: 403
    })
  }
}
