import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe('ProfileStatus component', () => {
    // test("Matches the snapshot", () => {
    //     const Comp = create(<ProfileStatus status={'Hi React'}/>)
    //     expect(Comp.toJSON()).toMatchSnapshot()
    // });

    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'Hi React'}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Hi React')
    })

    test('<span> after creation should be displayed with status', () => {
        const component = create(<ProfileStatus status={'Hi React'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })

    test('<span> after creation should contain status', () => {
        const component = create(<ProfileStatus status={'Hi React'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('Hi React')
    })

    test('<input> after creation should not be displayed', () => {
        const component = create(<ProfileStatus status={'Hi React'}/>)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'Hi React'}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Hi React')
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'Hi React'} updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })

})
