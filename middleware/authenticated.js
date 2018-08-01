export default function ({ store, redirect }) {
  if (!store.state.account.isAuthenticated) {
    return redirect('/login');
  }
};
