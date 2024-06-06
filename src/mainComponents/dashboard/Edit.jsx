import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';

function Edit({handleModelChange,content}) {
    return (
        <div>
            <FroalaEditor
                tag='textarea'
                model={content}
                onModelChange={handleModelChange}
                config={{
                    placeholderText: 'Edit Your Blog Details Here!',
                    charCounterCount: false,
                    toolbarButtons: [
                        'bold', 'italic', 'underline',
                        'fontSize', 'color',
                        'outdent', 'indent', 'undo', 'redo', 'clearFormatting', 'selectAll', 'align', 'formatOL', 'formatUL'
                    ],
                    fontSizeSelection: true,
                    fontSize: ['8', '10', '12', '14', '16', '18', '24', '30', '36', '42', '48'],
                    listAdvancedTypes: true,


                }}
            />
        </div>
    )
}

export default Edit