import core from '@actions/core'
import got from 'got'

try {
	const source = core.getInput('source', { required: true })
	const command = core.getInput('command', { required: true })
	const token = core.getInput('token', { required: true })

	await got.post('https://www.tasker.sh/api/queues/default/tasks', {
		headers: {
			authorization: token
		},
		json: {
			task_type: "dispatch", 
			source,
			command, 
		}
	})

} catch (error) {
	core.setFailed(error.message)
}
