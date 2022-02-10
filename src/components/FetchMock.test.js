import fetchMock from 'fetch-mock'


describe('Fetch Mock', () => {
    // it("fails here", () => expect(false).toEqual(true))

    it("mocks using an imported framework", async () => {
        fetchMock.get("https://picsum.photos/v2/list?page=17&limit=3",
            [
                { "url": "volkswagen.de" }
            ]
        )

        fetch("https://picsum.photos/v2/list?page=17&limit=3")
            .then(res => res.json())
            .then(value => expect(value).toEqual([{ "url": "volkswagen.de" }]))

        fetchMock.restore()
    })

    it("mocks using jest function mocking in global scope", () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(
                [
                    { "url": "volkswagen.de" }
                ])
        })

        fetch("https://picsum.photos/v2/list?page=17&limit=3")
            .then(res => res.json())
            .then(value => expect(value).toEqual([{ "url": "volkswagen.de" }]))

        jest.restoreAllMocks();
    })
})