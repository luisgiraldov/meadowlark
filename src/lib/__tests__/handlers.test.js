import { 
    home,
    about,
    notFound,
    serverError
} from '../handlers'

test ('home page renders', () => {
    const req = {}
    const res = { render: jest.fn() }
    home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('about page renders with fortune', () => {
    const req = {}
    const res = { render: jest.fn() }
    about(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune: expect.stringMatching(/\W/),
    }))
})

test('404 not found', () => {
    const req = {}
    const res = { 
        render: jest.fn(),
        status: jest.fn()
    }
    notFound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
    expect(res.status.mock.calls.length).toBe(1)
    expect(res.status.mock.calls[0][0]).toBe(404)
})

test('500 handler renders', () => {
    const err = new Error('some error')
    const req = {}
    const res = { 
        render: jest.fn(),
        status: jest.fn() 
    }
    const next = jest.fn()
    serverError(err, req, res, next)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
    expect(res.status.mock.calls.length).toBe(1)
    expect(res.status.mock.calls[0][0]).toBe(500)
})
