const targetHour = 17
const targetMinute = 0
const targetSecond = 0

function getTimeRemaining(targetTime) {
  const now = new Date()
  const timeDifference = targetTime - now
  return Math.floor(timeDifference / 1000) // Convert milliseconds to seconds
}

function getTargetTime(hour, minute, second) {
  const now = new Date()
  const targetTime = new Date()
  targetTime.setHours(hour)
  targetTime.setMinutes(minute)
  targetTime.setSeconds(second)
  targetTime.setMilliseconds(0)

  // If the target time has already passed for today, set it for tomorrow
  if (targetTime < now) {
    targetTime.setDate(targetTime.getDate() + 1)
  }

  return targetTime
}

const targetTime = getTargetTime(targetHour, targetMinute, targetSecond)

setInterval(() => {
  const secondsRemaining = getTimeRemaining(targetTime)
  console.log(secondsRemaining)
}, 1000)
