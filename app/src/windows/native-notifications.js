export const notify = ({title, body, tag, onActivate} = {}) => {
  new Notification(title, {
    silent: true,
    body: body,
    tag: tag
  }).onclick = onActivate
}
